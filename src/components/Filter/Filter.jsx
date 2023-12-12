import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selector';
import { onInputChangeAction } from '../../redux/filter/filterSlice';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
    const filter = useSelector(getFilter);
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
                value={filter}
                onChange={onInputChange}
            />
        </FilterContainer>
    );
};