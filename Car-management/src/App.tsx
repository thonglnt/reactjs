import { ChangeEvent, useCallback, useEffect, useState } from 'react';

// Components
import { Header } from './components/Header';
import { SearchTextBox } from './components/SearchTextBox';
import ListCar from './components/ListCar';
import CarForm from './components/CarForm';

// Interfaces
import { Car } from './interfaces/Car';

// Constants
import { URL } from './constants/url';

// Services
import { deleteData, getData, postData, updateData } from './services/api';

// Validations
import { validateCarForm, ValidationResult } from './helpers/validation-form';

// Messages
import { ServerErrMessages } from './constants/messages';

// Styles
import './assets/styles/app.css';

const App = () => {
  const [currentCars, setCurrentCars] = useState<Car[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [carInformation, setCarInformation] = useState<Car | null>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [listCars, setListCars] = useState<Car[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  /**
   * setCurrentCars is used display data on the screen
   * setListCars is used to get all the data of the car used for search by filter
   */
  useEffect(() => {
    const getListCar = async (): Promise<void> => {
      const response: Car[] = await getData(URL);
      setCurrentCars(response);
      setListCars(response);
    };
    getListCar();
  }, []);

  /**
   * If isOpenModal = true
   * Modal will be opened and the value in the input cell will be null
   * Using setCarInformation(undefined)
   */
  const handelToggleModal = (): void => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      setCarInformation(null);
    }
  };

  const handleCreate = async (car: Car): Promise<void> => {
    try {
      const validateFormCreate: ValidationResult = validateCarForm(car);
      if (validateFormCreate.isValid) {
        setLoading(true);
        await postData(car, URL);
        setCurrentCars([...currentCars, car]);
        handelToggleModal();
      }
      setLoading(false);
    } catch (error) {
      setErrorMessage(ServerErrMessages.ServerResponseError);
      handelToggleModal();
    }
  };

  const openModalEdit = (car: Car): void => {
    setCarInformation(car);
    handelToggleModal();
  };

  const handleEditCar = async (car: Car): Promise<void> => {
    try {
      const validateFormEdit: ValidationResult = validateCarForm(car);
      if (validateFormEdit.isValid) {
        setLoading(true);
        const updateCar = await updateData(car.id, URL, car);
        const newCars: Car[] = currentCars.map((oldCar) => {
          if (oldCar.id === car.id) {
            return updateCar;
          } else {
            return oldCar;
          }
        });
        setCurrentCars(newCars);
        handelToggleModal();
      }
      setLoading(false);
    } catch (error) {
      setErrorMessage(ServerErrMessages.ServerEditError);
    }
  };

  const handleDelete = useCallback(
    async (id: number, carName: string): Promise<void> => {
      try {
        const confirmDelete = 'Are you sure delete ' + carName.toUpperCase() + '?';
        if (confirm(confirmDelete)) {
          await deleteData(id, URL);
          const carArr: Car[] = currentCars.filter((item) => item.id !== id);
          setCurrentCars(carArr);
        }
      } catch (error) {
        setErrorMessage(ServerErrMessages.ServerDeleteError);
      }
    },
    [currentCars]
  );

  // Feature search
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    const newValueSearch: string = e.target.value;
    const searchCars: Car[] = listCars.filter((item) => {
      return item.carName.includes(newValueSearch);
    });
    setCurrentCars(searchCars);
  };

  return (
    <div className="container">
      <div>
        <Header toggleModal={handelToggleModal} />
        <SearchTextBox onChange={handleChangeSearch} />
      </div>
      <ListCar cars={currentCars} openModalEdit={openModalEdit} onDelete={handleDelete} />
      {isModalOpen && (
        <CarForm
          isDisableButton={isLoading}
          onEdit={handleEditCar}
          onCreate={handleCreate}
          toggleModal={handelToggleModal}
          selectedCar={carInformation}
        />
      )}
    </div>
  );
};

export default App;
