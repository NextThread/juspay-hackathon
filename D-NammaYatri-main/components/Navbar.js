import Image from 'next/image'
import avatar from '../temp/change.jpg'
import { BsLockFill } from 'react-icons/bs'
import { useContext } from 'react'
import { UberContext } from '../context/uberContext'

const style = {
  wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
  leftMenu: `flex gap-3`,
  logo1: `text-3xl text-yellow-400 flex cursor-pointer mr-0`,
  logo2: `text-3xl text-green-500 flex cursor-pointer mr-20`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-5 py-2`,
  loginText: `ml-3`,
}

const Navbar = () => {
  const { currentAccount, connectWallet, currentUser } = useContext(UberContext)

  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo1}>Namma</div>
        <div className={style.logo2}>Yatri</div>
        <div className={style.menuItem}>Ride</div>
        <div className={style.menuItem}>Drive</div>
        <div className={style.menuItem}>More</div>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menuItem}>Help</div>
        <div className={style.menuItem}></div>
        <div className={style.userImageContainer}>
          <Image
            className={style.userImage}
            src={avatar}
            width={40}
            height={40}
          />
        </div>
        {currentAccount ? (
          <div>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className={style.loginButton} onClick={() => connectWallet()}>
            <BsLockFill />
            <span className={style.loginText}>Log in</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
