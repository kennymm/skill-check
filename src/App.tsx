import './App.css';
import { UserList } from './components/UserList';
import { useGetUsers } from "./hooks/useGetUsers";




function App() {
  const { getUsers, userProfiles, loading, error } = useGetUsers();

  const onClickFetchUser = () => getUsers();

  return (
    <div className="App" > 
      <div style={{textAlign:"center", margin:"32px"}}>
        <button onClick={onClickFetchUser} >データ取得</button>
      </div>
      <br />
      {error ? (
        <p style={{color:"red"}}>データの取得に失敗しました</p>
      ) : loading ? (
        <p style={{textAlign:"center"}}>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserList key={user.id} user={user} />
          ))}
        </>
      ) }
    </div>
  );
}

export default App;
