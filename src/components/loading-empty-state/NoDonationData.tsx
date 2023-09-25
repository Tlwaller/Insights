
import noDonationData from '../../assets/NoDonationData.png';
import mapPlaceholder from '../../assets/MapPlaceholder.png';

export const NoDonationData = () => {
    return (
        <div className='flex justify-center bg-contain bg-no-repeat bg-center h-full' style={{backgroundImage: `url(${mapPlaceholder})`, height: 384}}>
            <div className='flex flex-col justify-center items-center w-96 h-full'>
                <img src={noDonationData} alt="No results" className='w-3/4'/>
            </div>
        </div>
    )
}
