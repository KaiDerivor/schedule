import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import styles from './styles.module.scss';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import { FormElementAssignee } from '@/app/Componnets/Add/Elements/FormElementAssignee';
import { FormElementStatus } from '@/app/Componnets/Add/Elements/FormElementStatus';
import { FormElementProjects } from '@/app/Componnets/Add/Elements/FormElementProjects';
import { FormElementDate } from '@/app/Componnets/Add/Elements/FormElementDate';
import { FormElementPriority } from '@/app/Componnets/Add/Elements/FormElementPriority';
import { FormElementSutasks } from '@/app/Componnets/Add/Elements/FormElementSutasks';
import Link from 'next/link';
import { createTask } from './actions';
import { FormElementDescription } from '@/app/Componnets/Add/Elements/FormElementDescription';
import { TaskForm } from '@/app/Componnets/Add/TaskForm';
import { CommentField } from '@/app/Componnets/Add/Elements/CommentField';
import { MiddlePaperWrapper } from '@/ui/MiddlePaperWrapper';




type PageType = {
};

const Page: React.FC<PageType> = ({ }) => {

    return (
        <Stack alignItems={'center'}>
            <MiddlePaperWrapper
                title='New task'
                pathBack='/app/add'
            >
                <form action={createTask} >
                    <Stack direction={'row'} sx={{ p: 2, pt: 0 }}>
                        <Box sx={{ flexGrow: 1 }}>
                            {/* <IconButton aria-label="delete" href='#'>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="edit" href='#'>
                            <EditIcon />
                        </IconButton> */}
                        </Box>
                    </Stack>
                    <TaskForm defaultValues={{}}
                        labelConfirm='Confirm'
                        UnderFormSlot={<CommentField />}
                    />
                </form>
            </MiddlePaperWrapper>
        </Stack>
    );
};

export default Page;