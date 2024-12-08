

import Cover from './Cover'
import { Profile } from '../../types/profile'

export default function ClientCover({ profileData }: { profileData: Profile }) {
 
  return <Cover profileData={profileData} />
}
