import styles from "./styles.module.css";
import Home from '../Home';
// import '../../';
import DataProvider from '../../context/DataProvider';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div>
			
	 <DataProvider>
      <Home/>
    </DataProvider> 

		
		</div>
	);
};

export default Main;
