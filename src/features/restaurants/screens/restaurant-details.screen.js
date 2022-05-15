import React, {useState} from "react";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { ScrollView } from "react-native";

export const RestaurantDetailScreen = ({ route }) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpaned] = useState(false);
    const [dinnerExpanded, setDinnerExpaned] = useState(false);
    const [drinkExpanded, setDrinkExpaned] = useState(false);

    const { restaurant } = route.params;
    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />

            <ScrollView>
                <List.Accordion 
                    title="Breakfast"
                    left={props => <List.Icon {...props} icon="bread-slice" />}
                    expanded={breakfastExpanded}
                    onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
                    
                    <List.Item title="Eggs Benedict" />
                    <List.Item title="Strawberry Crepes" />
                    <List.Item title="Classic Breakfast" />
                </List.Accordion>

                <List.Accordion
                    title="Lunch"
                    left={props => <List.Icon {...props} icon="hamburger" />}
                    expanded={lunchExpanded}
                    onPress={() => setLunchExpaned(!lunchExpanded)}>
                    
                    <List.Item title="Club Sandwich" />
                    <List.Item title="Cheeseburger" />
                </List.Accordion>

                <List.Accordion
                    title="Dinner"
                    left={props => <List.Icon {...props} icon="food-variant" />}
                    expanded={dinnerExpanded}
                    onPress={() => setDinnerExpaned(!dinnerExpanded)}>

                    <List.Item title="Beef Strognoff" />
                    <List.Item title="Meatloaf with Potatoes and Vegetables" />
                </List.Accordion>

                <List.Accordion
                    title="Drinks"
                    left={props => <List.Icon {...props} icon="cup" />}
                    expanded={drinkExpanded}
                    onPress={() => setDrinkExpaned(!drinkExpanded)}>
                    
                    <List.Item title="Miller Highlife" />
                    <List.Item title="Wine (Red or White)" />
                    <List.Item title="Tea" />
                    <List.Item title="Coke Products" />
                </List.Accordion>
            </ScrollView>
        </SafeArea>
    )
}