import { nanoid } from "nanoid"
import avatar from "../assets/img/avatar.png"

export const user_data = {
    id: nanoid(),
    fullName: "Billy Pearson",
    title: "Front-end developer",
    email: "billy@example.com",
    phone: "(+603) 546 624 342",
    desc: "Self-motivated developer, who is willing to learn and create outstanding UI applications. <br /> <br /> Donec aliquam est dui, vel vestibulum diam sollicitudin id.Quisque feugiat malesuada molestie.",
    avatar: avatar
}