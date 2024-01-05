import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

export const loginRequest = (email, password) => {
    const authy = getAuth();
    signInWithEmailAndPassword(authy, email, password);
}

// const [isAuthenticated, setIsAuthenticated] = useState(false);

// 	const authy = getAuth();
// 	useEffect(() => {
// 		setTimeout(() => {
// 			signInWithEmailAndPassword(authy, "albion@email.com", "testpass123")
// 			.then((user) => {
// 				console.log(user);
// 				setIsAuthenticated(true);
// 			})
// 			.catch((error) => {
// 				console.log(error.message);
// 			});
// 		}, 2000);
// 	},[])