import { nanoid } from 'nanoid'
import { ProfileInfoProps } from '../ProfileInfo'
import ProfileAdditionalItem from './ProfileAdditionalItem'

const ProfileAdditional = ({ profileInfoVo }: ProfileInfoProps) => (
  <ul>
    {profileInfoVo.getAdditionalInfos().map(additionalInfo => (
      <ProfileAdditionalItem
        key={nanoid()}
        additionalInfoVo={additionalInfo}
      />)
    )}
  </ul>
)

export default ProfileAdditional