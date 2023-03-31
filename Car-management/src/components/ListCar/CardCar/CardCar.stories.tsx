import { Story } from '@storybook/react';

// Components
import Card, { CardProp } from './index';

// Images
import { Images } from '../../../constants/images/images';

export default {
  title: 'Components/Card',
  component: Card
};

const Template: Story<CardProp> = (args) => <Card {...args} />;

export const CardHonda = Template.bind({});
CardHonda.args = {
  carName: 'Honda Civic',
  brandName: 'Honda',
  color: 'gray',
  quantity: 10,
  image: Images.Honda
};

export const CardHyundai = Template.bind({});
CardHyundai.args = {
  carName: 'Hyundai Santafe',
  brandName: 'Hyundai',
  color: 'white',
  quantity: 20,
  image: Images.Hyundai
};
