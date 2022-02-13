import ProfileInfoVo from '../../ProfileInfoVo';
import ProfileAdditionalItem from './ProfileAdditionalItem';
import {nanoid} from 'nanoid';

const profileInfoVo = ProfileInfoVo.getInstance();

const ProfileAdditional = () => (
    <ul>
      {profileInfoVo.getAdditionalInfos().
          map(additionalInfo =>
              <ProfileAdditionalItem
                  key={nanoid()}
                  additionalInfo={additionalInfo}
              />)
      }
    </ul>
);

export default ProfileAdditional;