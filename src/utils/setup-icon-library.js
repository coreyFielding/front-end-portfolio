import {faGithub, faLinkedinIn, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faChevronRight, faChevronLeft, faChevronDown} from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

export default function setupIconLibrary() {
    library.add(faGithub, faLinkedinIn, faInstagram, faFacebook, faChevronRight, faChevronLeft, faChevronDown)
}