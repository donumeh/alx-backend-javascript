namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number
    }

    export class React extends Subject {
        getRequirements(): string {
            return "Here is the list of requirement for React";
        }

        getAvailableTeacher():string {
            if (this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact <= 0) {
                return "No available teacher";
            }

            return "Available Teacher: " + this.teacher.firstName;
        }
    }
}

