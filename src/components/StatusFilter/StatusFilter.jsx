import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../redux/filterForm/slice";
import { selectFilterStatus } from "../../redux/filterForm/selectors";
import { statusForm } from "../../redux/filterForm/constants";
import css from './StatusFilter.module.css'


const StatusFilter = ()=>{
    const dispatch = useDispatch();
    const filter = useSelector(selectFilterStatus);

    const handleFilterChange = filter => dispatch(setStatusFilter(filter))

    return(
        <div className={css.statusDiv}>
            <Button 
            selected={filter === statusForm.new}
            onClick={()=> handleFilterChange(statusForm.new)}
            > 
            New
            </Button>

            <Button 
            selected={filter === statusForm.edit}
            onClick={()=> handleFilterChange(statusForm.edit)}
            > 
            Edit
            </Button>
        </div>
    )
}
export default StatusFilter;
