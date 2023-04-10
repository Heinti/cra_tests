// import newForm from "components/userForm/newForm/newForm";

import EditUserForm from "../../components/UserForm/EditUserForm/EditUserForm";
import NewUserForm from "../../components/UserForm/NewUserForm/NewUserForm";
// import ShowUserData from "../../components/1/ShowUserData";
import StatusFilter from "../../components/StatusFilter/StatusFilter";
import { statusForm } from "../../redux/filterForm/constants";
import { selectFilterStatus } from "../../redux/filterForm/selectors";
import { useSelector } from "react-redux";
import ShowUserData from "../../components/1/ShowUserData";


const getVisibleForm = (status) =>{
    switch(status) {
    case statusForm.new:
        return <NewUserForm/>
    case statusForm.edit:
        return <EditUserForm/>
    default: <NewUserForm/>
}
}

const UserFormPage = () => {


    const currentPageStatus = useSelector(selectFilterStatus);
    const CurrentPage = getVisibleForm(currentPageStatus)
    // console.log(currentPageStatus)
    // console.log(statusForm.new)

    return (
        <div>
        <StatusFilter/>
        {CurrentPage}
        <ShowUserData/>
        </div>
    )
}

export default UserFormPage;