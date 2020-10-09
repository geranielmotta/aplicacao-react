import { goBack, push } from 'connected-react-router'

export default {
  goSeachOfProjects: push('/list-projects'),
  goCreateProject: push('/create-project'),
  goBack: goBack()
}
