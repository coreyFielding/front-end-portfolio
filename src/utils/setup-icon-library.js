import {faGithub, faLinkedinIn, faInstagram} from "@fortawesome/free-brands-svg-icons"
import {
    faChevronRight

} from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

export default function setupIconLibrary() {
    library.add(faGithub, faLinkedinIn, faInstagram, faChevronRight)
}