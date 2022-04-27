import s from './Filter.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
import { filterOperations } from 'redux/filter';
import { useDispatch } from 'react-redux';

export default function Filter() {
  const idFilter = nanoid();
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <label htmlFor={idFilter} className={s.label}>
        Find by name
      </label>

      <input
        className={s.input}
        type="text"
        name="filter"
        value={filterOperations.filter.payload}
        onChange={e => dispatch(filterOperations.filter(e.currentTarget.value))}
        id={idFilter}
      />
    </div>
  );
}
