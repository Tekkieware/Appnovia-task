import React from 'react'
import Image from 'next/image'
import man from '../../assets/images/man.png'
import woman from '../../assets/images/woman.png'


const collections = [
{title: "man", image: man},
{title: "woman", image: woman}
]
const CollectionAd = () => {
  return (
    <div className='collectionad'>
        {collections.map((collection, index)=>{
            return <div key={index} className='collectionad_item'>
            <div className='collectionad_item-image'>
            <Image src={collection.image} alt={collection.title} height={0} width={0} sizes="100vw"
            style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className='collectionad_item-overlay'>
            <span className='collectionad_item-overlay_title'>
            {collection.title}
            </span>
             <span className='collectionad_item-overlay_buttondiv'>
                <button className='collectionad_item-overlay_button'>
                    Shop collection
                </button>
            </span>
                
            </div>
        </div>
        })}
    </div>
  )
}

export default CollectionAd