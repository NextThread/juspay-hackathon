import Image from 'next/image'
import ethLogo from '../assets/eth-logo.png'
import { useEffect, useContext, useState } from 'react'
import { UberContext } from '../context/uberContext'
// import auto from '../assets/rides/auto.png'



const style = {
  wrapper: `h-full flex flex-col`,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carList: `flex flex-col flex-1 overflow-scroll`,
  car: `flex p-3 m-2 items-center border-2 border-white`,
  selectedCar: `h-15 border-2 border-black flex p-3 m-2 items-center`,
  carImage:`h-10`,
  carDetails:`ml-2 flex-1`,
  service: `font-medium`,
  time: `text-xs text-blue-500`,
  priceContainer:`flex items-center `
  
}

// const carList = [
//   {
//     service: 'Auto',
//     iconUrl: auto,
//     priceMultiplier:1
//   },
//   {
//     service: 'Auto',
//     iconUrl: auto,
//     priceMultiplier:1.7
//   },
//   {
//     service: 'Auto',
//     iconUrl: auto,
//     priceMultiplier:1.3
//   }
// ]

const basePrice= 15



const RideSelector = () => {
  const [carList, setCarList] = useState([])
  const { selectedRide, setSelectedRide, setPrice, basePrice } =
    useContext(UberContext)

  console.log(basePrice)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('/api/db/getRideTypes')

        const data = await response.json()
        setCarList(data.data)
        setSelectedRide(data.data[0])
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])


  return (
    <div className={style.wrapper}>
      <div className={style.title}>Choose a ride, or swipe up for more</div>
      <div className={style.carList}>
        {carList.map((car, index) => (
          <div
            key={index}
            className={`${
              selectedRide.service === car.service
                ? style.selectedCar
                : style.car
            }`}
            onClick={() => {
              setSelectedRide(car)
              setPrice(((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5))
            }}
          >
            <Image
              src={car.iconUrl}
              className={style.carImage}
              height={50}
              width={50}
            />
            <div className={style.carDetails}>
              <div className={style.service}>{car.service}</div>
              <div className={style.time}>5 min away</div>
            </div>
            <div className={style.priceContainer}>
              <div className={style.price}>
                {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
              </div>
              <Image src={ethLogo} height={25} width={40} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )


// return (
//   <div className={style.wrapper}>
//     <div className={style.title}> Choose a rode or swipe up for more</div>
//     <div className={style.carList}>
//       {carList.map((car,index) => (
//         <div className={style.car}>
//         <Image 
//           src={car.iconUrl}
//           className={style.carImage}
//           height={45}
//           width={40}
//         />
//         <div className={style.carDetails}>
//           <div className={style.service}>{car.service}</div>
//           <div className={style.time}>4 min away</div>
//         </div>
//         <div className={style.priceContainer}>
//           <div className={style.price}>
//             {((basePrice/10 ** 5)* car.priceMultiplier).toFixed(5)}
//           </div>
//           <Image 
//           src={ethLogo}
//           height={50}
//           width={60}          
//           ></Image>
//         </div>
//         </div>
//       ))}
//     </div>
//   </div>
// )
}

export default RideSelector
