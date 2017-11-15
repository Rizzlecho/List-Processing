/**
 * Created by nikit on 23/07/2017.
 */
if (currentCommand === 'end') {
    result.text('Finished');

    executeBtn.off('click',
        execute);
}