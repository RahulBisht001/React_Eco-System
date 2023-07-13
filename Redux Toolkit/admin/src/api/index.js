import Chance from 'chance'

const chance = Chance()

const fakeUserData = () => {

    return (chance.name())
}

export { fakeUserData }