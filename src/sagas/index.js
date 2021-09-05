import { takeEvery,put,call  } from 'redux-saga/effects';
import { IMAGES} from "../constants";

function* handleImageLoad(){
    console.log('fetching images from splash');

}
function* handleDang(){
    console.log('DANG!!');


}

//watcherSAGA
function* rootSaga(){
    console.log("hey")
     yield takeEvery(IMAGES.LOAD,handleImageLoad);
    yield takeEvery('DANG',handleDang);


}
export default rootSaga;
