import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import { MammalsWrapper } from "./InfoStyle"

const MammalsInfo = props => {
    return (
        <Col>
            <MammalsWrapper>
            <Card>
                <CardHeader>
                    <h1>Marine Mammals</h1>
                </CardHeader>
                <CardBody>
                    <div className="block">
                        <img className="imgleft" src={`${process.env.PUBLIC_URL}/assets/images/mammals.jpg`} alt="a picture of all mammals" />
                    
                    <p>
                        
                    There are five different animals that are in the catagory of marine mammal, they are sea otters, polar bears, cetaceans, pinnipeds, and sirenisans.
                    Cetaceans are animals like whales, dolphins and porpoises.
                    Sirenians are animals like manatees and dugongs, also known as sea cows.
                    Cetaceans consist of over 90 different whales, dolphins, and porpoises: 14 baleen whales, 7 porpoises, 3 sperm whales, 22 beaked whales, 38 dolphins, 4 river dolphins, beluga whales, and narwals.
                    </p>
                    </div>
                    <div className="block">
                    <img className="imgright" src={`${process.env.PUBLIC_URL}/assets/images/bluewhale.jpg`} alt="picture of a bluewhale" />
                    
                    <p>
                      
                    Baleen whales eat small animals called plancton and have hair like filters in their mouths instead of teeth. These help the whale catch the small animals they eat and push the rest of the water out of their mouths. The largest marine mammal is a blue whale (a baleen whale), averaging 98 feet long and weighing 200 tons!
                    Dolphins and porpoises are similar, porpoises just have smaller bodies and a shorter snout. Both species eat small fish and live in groups called pods.
                    </p>
                    </div>
                    <div className="block">
                    <img className="imgleft" src={`${process.env.PUBLIC_URL}/assets/images/Beluga.jpg`} alt="picture of a beluga whale" />
                   
                    <p>
                       
                    Beaked whales are whales that live in deep ocean water.  They are able to hold their breath for a very long time and do not have to come to the surface for air very often.  They are called beaked whales because they have a snout similar in shape to a dolphin.  They mostly eat deep water squid, but will also eat fish or crustations.  They catch their food but enlarging their throats and sucking their food into their mouths.
                    Blugas and narwals live in the cold waters of the Artic ocean.  They are foragers, they will eat fish, shrimp, crustations.  During the winter the whales migrate slightly south to avoid being underniether the ice cap as it forms.
                    </p>
                    </div>
                    <div className="block">
                    <img className="imgright" src={`${process.env.PUBLIC_URL}/assets/images/manatees.jpg`} alt="picture of a manatees" />
                    
                    <p>
                       
                    Sea cows got their name because they are similar to land cows in that they are large, slow, and live by eating grass.  Sea cows weigh about 3,300 pounds, and live by eating sea grass! They live in warm sallow waters on the coasts.  Sadly, because they are so slow, they are often times run over by boats or caught in fishing nets. Today they are on the endangered species list.
                    </p>
                    </div>
                    <div className="block">
                    <img className="imgleft" src={`${process.env.PUBLIC_URL}/assets/images/polarbear.jpg`} alt="picture of a polarbear" />
                    
                    <p>
                   
                    Polar Bears live exclusivly in the Artic, which is the northern most part of the world. Polar Bears can swim for days at a time. They eat mostly seals but will also eat young walrus or whales when they can.  They hunt mainly on floating ice burges.  Polar Bears actually have black skin with thick transparent fur, so we see a white bear!  This black skin and think fur help the bear to soak up the sun and stay warm. Polar bear mothers give birth while in hibernation in November or December in ice caves. The babies are only about the size of a guinea pig! The cubs will nurse while the mother hibernates, and when they come out of the cave in about 5 months the cubs will the size of a dog.
                    </p>
                    </div>
                </CardBody>
            </Card>
            </MammalsWrapper>
        </Col>
    )
}

export default MammalsInfo;


