//Double Room
import double from './media/double-room.webp'
import double1 from './media/double1.webp'
import double2 from './media/double2.webp'
import double3 from './media/double3.webp'
//Superior Room
import superior from './media/superior-room.webp'
import superior1 from './media/superior1.webp'
import superior2 from './media/superior2.webp'
import superior3 from './media/superior3.webp'
//Executive Suite
import exec from './media/executive-suite.webp'
import exec1 from './media/exec1.webp'
import exec2 from './media/exec2.webp'
import exec3 from './media/exec3.webp'
//Family Suite
import family from './media/family-suite.webp'
import family1 from'./media/family1.webp'
import family2 from'./media/family2.webp'
import family3 from'./media/family3.webp'
//One Bedroom Villa
import one from './media/one-room-villa.webp'
import one1 from'./media/one1.webp'
import one2 from'./media/one2.webp'
import one3 from'./media/one3.webp'

const Rooms = [
    {
        id: "0",
        name: "doubleroom",
        imgs: [double, double1, double2, double3],
        info: {
            size: 15,
            bed: "1 King Size",
            capacity: 2,
        },
        roomamenities:[
            "Private balcony",
            "King size bed",
            "Refrigerator",
            "AC System",
            "Television",
            "Hair dryer",
            "Daily room cleaning",
            "Shower"
        ]
    },
    {
        id: "1",
        name: "Superior Room ",
        imgs: [superior, superior1, superior2, superior3],
        info: {
            size: 25,
            bed: "1 King Size",
            capacity: 2,
        },
        roomamenities:[
            "Private balcony",
            "King size bed",
            "Refrigerator",
            "AC System",
            "Television",
            "Hair dryer",
            "Daily room cleaning",
            "Shower"
        ]
    },
    {
        id: "2",
        name: "Executive Suite",
        imgs: [exec, exec1, exec2, exec3],
        info: {
            size: 20,
            bed: "1 King Size",
            capacity: 2,
        },
        roomamenities:[
            "Private balcony",
            "King size bed",
            "Refrigerator",
            "AC System",
            "Television",
            "Hair dryer",
            "Daily room cleaning",
            "Shower",
            "Wooden loft"
        ]
    },
    {
        id: "3",
        name: "Family Suite",
        imgs: [family, family1, family2, family3],
        info: {
            size: 50,
            bed: "2 King Size",
            capacity: 5,
        },
        roomamenities:[
            "2 Bedrooms with king size bed",
            "Sofa bed",
            "Private pool",
            "Coffee machine",
            "Wifi",
            "Private balcony",
            "Refrigerator",
            "AC System",
            "Television",
            "Daily room cleaning",
        ]
    },
    {
        id: "4",
        name: "One Bedroom Villa",
        imgs: [one, one1, one2, one3],
        info: {
            size: 40,
            bed: "1 King Size",
            capacity: 4,
        },
        roomamenities:[
            "Private balcony",
            "King size bed",
            "Private pool",
            "Living room with 2 sofa bed",
            "Refrigerator",
            "AC System",
            "Television",
            "Daily room cleaning",
            "Shower"
        ]
    },

]
export default Rooms