import {faGithub as github, faLinkedinIn as linkedin, faInstagram as instagram, faFacebookMessenger as messenger} from "@fortawesome/free-brands-svg-icons"
import {faChevronRight, faChevronLeft, faChevronDown, faHome, faBirthdayCake, faBuilding, faUniversity, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

export default function setupIconLibrary() {
    library.add(
        github,
        linkedin,
        instagram,
        messenger,
        faChevronRight,
        faChevronLeft,
        faChevronDown,
        faHome,
        faBirthdayCake,
        faBuilding,
        faUniversity,
        faMapMarkerAlt
    )
}