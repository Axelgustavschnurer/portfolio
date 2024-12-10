type pbItem = {
    collectionId: string,
    collectionName: string, 
    created: Date,
    updated: Date,
    id: string,
}

type School = pbItem & {
    logo: string,
    name: string
}

type Subject = 'Chemistry' | 'Biology' | 'Computer science' | 'Environmental science';

type course = pbItem & {
    school: School.id,
    expand: School
    name: string,
    ongoing: boolean,
    subjects: Array<Subject>,
    code: string,
    credits: number,
    start_date: Date,
    end_date: Date,
}