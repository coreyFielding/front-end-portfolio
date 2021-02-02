import {faGithub, faLinkedinIn, faInstagram} from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

export default function setupIconLibrary() {
    library.add(faGithub)
    library.add(faLinkedinIn)
    library.add(faInstagram)
}