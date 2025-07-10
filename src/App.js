import Avatar from './components/Avatar'

export default function App() {
  const data = {
    profileText: 'Profile bakın',
    imageSrc: '/photo.png',
    name: 'Tom Cook',
  }
  return <Avatar {...data} />
}
