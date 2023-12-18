import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selector';
import { onInputChangeAction } from '../../redux/filter/filterSlice';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
    const contact = useSelector(getFilter);
    const dispatch = useDispatch();

    const onInputChange = ({ target }) => {
        dispatch(onInputChangeAction(target.value));
    };

    return (
        <FilterContainer>
            <FilterLabel>Find contacts by name</FilterLabel>
            <FilterInput
                type="text"
                name="filter"
                value={contact}
                onChange={onInputChange}
            />
        </FilterContainer>
    );
};