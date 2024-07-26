import { load, Logger, readFileSync } from '@Environment';

export class Console {
    private ProtectivePath: string = './Config/Auth/Console.yml';
    private ProtectiveData: ProtectiveData;

    constructor() {
        try {
            this.ProtectiveData = this.ProtectiveLoader();
        } catch (Error) {
            Logger.error(`Bilinmeyen bir hata meydana geldi:`);
            console.error(Error);
        }
    }

    private ProtectiveLoader() {
        return load(readFileSync(this.ProtectivePath, { encoding: 'utf-8' })) as ProtectiveData;
    }

    public get getTaskDelay(): ProtectiveData['TaskDelay'] {
        return this.ProtectiveData.TaskDelay;
    }

    public get getGiveRoleDelay(): ProtectiveData['GiveRoleDelay'] {
        return this.ProtectiveData.GiveRoleDelay;
    }

    public get getLimits(): ProtectiveData['Limits'] {
        return this.ProtectiveData.Limits;
    }

    public get getBlocking(): ProtectiveData['Blocking'] {
        return this.ProtectiveData.Blocking;
    }
}