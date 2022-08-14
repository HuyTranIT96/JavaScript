import{
    TYPE_LOG
} from './constanst.js';

function logger(log, type = 'log'){
    console[type](log);
}
export default logger;