import React from 'react'
import Demo from '../components/Demo'
import Card from '../components/Card'

const HomePage = () => {
    const cardsData = [
        {id:1,
            title: 'Card1',
            text: 'This is the first Card',
            customClasses: 'bg-yellow-100'
        },
        {id:2,
            title: 'Card2',
            text: 'This is the second Card',
            customClasses: 'bg-green-100'
        },
        {id:3,
            title: 'Card3',
            text: 'This is the third Card',
            customClasses: 'bg-blue-100'
        }
    ];
  return (
    <div>
        <h1>Welcome to the HomePage</h1>
        <Demo />
        { cardsData.map((card)=>(
            <Card 
                key={card.id}
                title={card.title}
                text={card.text}
                customClasses={card.customClasses}
            />
        ))

        }

    </div>
  )
}

export default HomePage