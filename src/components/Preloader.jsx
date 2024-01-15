import { ThreeDots } from 'react-loader-spinner'

const Preloader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <ThreeDots
            visible={true}
            height="80"
            width="90"
            color="rgb(234 179 8)"
            radius="9"
            ariaLabel="three-dots-loading"
        />
    </div>
  )
}

export default Preloader