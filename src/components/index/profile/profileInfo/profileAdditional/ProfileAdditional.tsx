import ProfileInfoVo from '../../profileInfoVo'
import ProfileAdditionalItem from './ProfileAdditionalItem'
import { nanoid } from 'nanoid'
import { ProfileInfoProps } from '../ProfileInfo'

const ProfileAdditional = ({ profileInfoVo }: ProfileInfoProps) => (
  <ul>
    {profileInfoVo.getAdditionalInfos().map(additionalInfo =>
      <ProfileAdditionalItem
        key={nanoid()}
        additionalInfo={additionalInfo}
      />)
    }
  </ul>
)

export default ProfileAdditional