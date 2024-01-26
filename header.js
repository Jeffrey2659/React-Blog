const Header = ({handleStateA,handleStateB,handleStateC }) => {
  return (
    <header className="header">
      <button  onClick={() => handleStateA() && console.log('Works A')} className="users">
        users
      </button>
      <button onClick={() => handleStateB()} className="posts">
        posts
      </button>
      <button onClick={() => handleStateC()} className="comments">
        contacts
      </button>
    </header>
  )
}

export default Header;
