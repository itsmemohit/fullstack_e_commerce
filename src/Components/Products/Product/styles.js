import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        paddingTop: '100%',
        height: 0,
    },
    cartActions: {
        display: 'flex',
        justifyContent: 'flex',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-around',
    }
}));