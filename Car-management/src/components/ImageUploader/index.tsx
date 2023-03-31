import { ChangeEvent, memo } from 'react';

// Styles
import './image-uploader.css';

export type UploaderProp = {
  label: string;
  messageErr?: string;
  name: string;
  baseImage: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ImageUploader = ({
  label,
  messageErr,
  name,
  baseImage,
  onChange,
}: UploaderProp) => {
  return (
    <div className="uploader">
      <label className="uploader-title">
        {label}
        <div className="uploader-input">
          <input name={name} onChange={onChange} type="file" />
          {baseImage && <img src={baseImage} className="uploader-image" />}
        </div>
      </label>
      {messageErr && <span className="error-msg">{messageErr}</span>}
    </div>
  );
};

export default memo(ImageUploader);
