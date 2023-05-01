import React, { Dispatch, FC, SetStateAction } from 'react';
import style from './modal.module.css';
import { Article } from '../../pages/Main/Main';

const Modal: FC<{
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  item: Article | undefined;
}> = ({ active, setActive, item }) => {
  return (
    <div
      data-testid="modal"
      className={active ? style.activeModal : style.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? style.activeModalContent : style.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <img className={style.imgModal} src={item?.urlToImage} alt="" />
        <span className={style.cross} onClick={() => setActive(false)}>
          x
        </span>
        <p>
          <i>{item?.source.name}</i>
        </p>
        <p>
          <strong>Author:</strong> {item?.author}
        </p>
        <div>
          <strong>Description:</strong>
          <p> {item?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
