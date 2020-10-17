import { goBack, push } from 'connected-react-router'

export default {
  goListProject: push('/list-projects'),
  goCreateProject: push('/create-project'),
  goListUser: push('/list-users'),
  goCreateUsers: push('/create-users'),
  goBack: goBack(),
}
