import { CategoryForm } from "@/app/Componnets/Add/CategoryForm";
import { MiddlePaperWrapper } from "@/ui/MiddlePaperWrapper";
import Stack from "@mui/material/Stack";
import { createCategory, getCategoryById, updateCategory } from "../actions";

type PageType = {
    params: { id: string }
};

const Page: React.FC<PageType> = async ({ params }) => {
    const { id } = params;

    const category = await getCategoryById(id);

    if (!category) {
        //todo 404
    }

    return (
        <Stack spacing={2} alignItems={'center'} justifyContent={'center'}>
            <MiddlePaperWrapper pathBack="/app/add/" title="Update category">
                <form action={updateCategory}>
                    <input type="hidden" name="category_id" value={category?._id.toString()} />
                    <CategoryForm
                        color={category?.color}
                        name={category?.name}
                    />
                </form>
            </MiddlePaperWrapper>
        </Stack>
    );
};

export default Page;