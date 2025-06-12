import React from 'react'
import Card from './Card'
import img1 from "../../images/cardimgone.jpg"
function ParentCard() {

    return (
        <div class='d-flex gap-3 m-3'>
            <Card title="card1" desc=" this is card one −€😂💕🧑🎐🎀🚕🛺❤️╰(*°▽°*)╯(●'◡'●)" image={img1} heading="Card 1" />
            <Card title="card1" desc=" this is card two −€😂💕🧑🎐🎀🚕🛺❤️╰(*°▽°*)╯(●'◡'●)" image={img1} heading="Card 2" />
            <Card title="card1" desc=" this is card three −€😂💕🧑🎐🎀🚕🛺❤️╰(*°▽°*)╯(●'◡'●)" image={img1} heading="Card 3" />
        </div>
    )
}

export default ParentCard