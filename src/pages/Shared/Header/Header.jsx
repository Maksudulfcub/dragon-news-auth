import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='mx-auto text-center mt-10'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-gray-500 mt-5'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-gray-600 mt-5'>{moment().format("dddd, MMMM D YYYY.")}</p>
        </div>
    );
};

export default Header;