import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import { SharkWrapper } from "./InfoStyle"

const SharkInfo = props => {
    return (
        <Col>
            <SharkWrapper>
            <Card>
                <CardHeader>
                    <h1>Let's learn about Sharks</h1>
                </CardHeader>
                <CardBody>
                    <p1>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/sharks1.jpg`} alt="a picture of a shark" />
                    </p1>
                    <p2>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        There are over 500 different types of sharks living in many different types of ocean water, deep water, coral reef, cold and warm.  They come in all different shapes and sizes, the smallest one is about the size of your hand and the biggest one is a whale shark and can be 60 feet long!
                            <br></br>
                            <br></br>
                        No matter how big or small, or color, whether they live in warm water or cold water; all sharks have the same body features.
                        Sharks do not have hard bones the way that we do, there skeletons are much more flexible.  They are made of cartilage, which is the same thing that the tip of your nose, and your ears are made of.  This allows the sharks to be less heavy in the water so they can swim fast and far!
                    </p2>
                    <p3>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/sharks2.jpg`} alt="another picture of a shark" />
                    </p3>
                    <p4>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        Sharks teeth are also different from ours. We are born with only two sets of teeth, if our adult teeth fall out, they will not come back.  But sharks can re-grow their teeth!  In fact they can have up to 50 teeth in their mouth at one time! We never have more that 32.
                            <br></br>
                            <br></br>
                        All sharks, like most fish, have gills that they use to breathe with underwater
                        Sharks have six senses.  A shark's senses are very in tune to help them hunt.
                            <br></br>
                            <br></br>
                        The shark's sense of smell is very different from ours.  It is very powerful!  It also have a sense of direction believe it or not!  There is a part of the shark's nose that can tell what direction a smell is coming from.  This helps the shark be able to find its food.
                            <br></br>
                            <br></br>
                        Unlike us, they have a sense called electromagnetism.  This allows the shark to sense electromagnetic pulses in the water that are made from the movement of other animals in the ocean.  This is another way to help them find their food.
                    </p4>
                </CardBody>
            </Card>
            </SharkWrapper>
        </Col>
    )
}

export default SharkInfo;