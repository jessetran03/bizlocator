import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faStarHalf, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

export default function registerIcons() {
  library.add(
    faStar,
    faStarHalf,
    farStar,
    faSearch,
    faSpinner,
  )
}
