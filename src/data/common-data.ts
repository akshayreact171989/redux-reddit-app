
// import { genRandomInteger } from 'shared/src/common/utils';

export const genRandomInteger = (minValue: number, maxValue: number, seed?: number) => {
    if (maxValue - minValue < 0) {
        throw "Cannot generate a random number between"
    }
    const randomValue = seed != null ? parseFloat('0.' + Math.sin(seed).toString().substr(6)) : Math.random()
    return Math.floor(randomValue * (maxValue - minValue)) + minValue
}

export const coverImages = [
    "../common/img/cover-images/adventure-island-delhi-cov.jpg",
    "../common/img/cover-images/alberto-contadors-race-winner-cov.jpg",
    "../common/img/cover-images/aldar-headquarters-cov.jpg",
    "../common/img/cover-images/algae-lake-cov.jpg",
    "../common/img/cover-images/alleyway-cov.jpg",
    "../common/img/cover-images/annulus-cov.jpg",
    "../common/img/cover-images/aquarium-cov.jpg",
    "../common/img/cover-images/arctic-cold-cov.jpg",
    "../common/img/cover-images/avengers-war-cov.jpg",
    "../common/img/cover-images/avery-ashley-miller-cov.jpg",
    "../common/img/cover-images/baby-being-loved-cov.jpg",
    "../common/img/cover-images/baby-mirror-cov.jpg",
    "../common/img/cover-images/bagel-house-cov.jpg",
    "../common/img/cover-images/bandra-worli-sealink-cov.jpg",
    "../common/img/cover-images/baseball-cov.jpg",
    "../common/img/cover-images/basketball-cov.jpg",
    "../common/img/cover-images/basketball-players-cov.jpg",
    "../common/img/cover-images/batman-batmobile-cov.jpg",
    "../common/img/cover-images/batman-batpod-cov.jpg",
    "../common/img/cover-images/batman-wonder-woman-cov.jpg",
    "../common/img/cover-images/batpod-cov.jpg",
    "../common/img/cover-images/beautiful-horses-black-beauty-cov.jpg",
    "../common/img/cover-images/beautiful-monastery-cov.jpg",
    "../common/img/cover-images/bees-pollination-daffodil-flower-cov.jpg",
    "../common/img/cover-images/bellagio-cov.jpg",
    "../common/img/cover-images/bermuda-destruction-cov.jpg",
    "../common/img/cover-images/big-show-cov.jpg",
    "../common/img/cover-images/bindra-shooting-cov.jpg",
    "../common/img/cover-images/blindfold-games-cov.jpg",
    "../common/img/cover-images/blinis-pancakes-cov.jpg",
    "../common/img/cover-images/blood-packets-cov.jpg",
    "../common/img/cover-images/blood-vessels-cov.jpg",
    "../common/img/cover-images/bmw-cov.jpg",
    "../common/img/cover-images/bolt-bolting-cov.jpg",
    "../common/img/cover-images/bolt-cov.jpg",
    "../common/img/cover-images/bolt-running-cov.jpg",
    "../common/img/cover-images/boss-baby-triangle-cov.jpg",
    "../common/img/cover-images/bow-arrow-cov.jpg",
    "../common/img/cover-images/bridge-cov.jpg",
    "../common/img/cover-images/broken-guitar-cov.jpg",
    "../common/img/cover-images/bugati-cov.jpg",
    "../common/img/cover-images/bugatti-veyron-cov.jpg",
    "../common/img/cover-images/bulb-cov.jpg",
    "../common/img/cover-images/burger-cov.jpg",
    "../common/img/cover-images/burrow-animals-cov.jpg",
    "../common/img/cover-images/cake-cov.jpg",
    "../common/img/cover-images/cancer-cells-cov.jpg",
    "../common/img/cover-images/cano-cristales-cov.jpg",
    "../common/img/cover-images/captain-america-shield-cov.jpg",
    "../common/img/cover-images/car-snow-drift-cov.jpg",
    "../common/img/cover-images/cards-house-cov.jpg",
    "../common/img/cover-images/carnivorous-cov.jpg",
    "../common/img/cover-images/carrom-cov.jpg",
]

export const getRandomCover = () => coverImages[genRandomInteger(0, coverImages.length)]