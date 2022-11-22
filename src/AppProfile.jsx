import './App.css';
import Profile from "./components/Profile";

function AppProfile() {
    const handleClick = (event) => {
        console.log(event);
        alert("버튼이 클릭 되었습니다.");
    };
    return <>
    {/* <button onClick={(event) => {
        console.log(event);
        alert("버튼이 클릭 되었습니다.");
    }}>버튼</button> */}
        <button onClick={handleClick}>버튼</button>
        <Profile image='https://images.unsplash.com/photo-1668210039927-82341df16e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' name='James Kim' title='프론트엔드 개발자' isNew={true} />
        <Profile image='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80' name='tana Young' title='풀스택 개발자' />
        <Profile image='https://images.unsplash.com/photo-1668063497279-7ecb0f0ffa8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' name='lynn yu' title='백엔드 개발자' />
    </>
}

export default AppProfile;
