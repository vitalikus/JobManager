export class Task {

    constructor(
      public _id: string,
      public _rev: string,
      public TaskName: string,   
      public Body: string,
      public ConflictTasks: {},
      public Cron: string,  
      public Headers: {},
      public MaxDuration: number,
      public ScheduledUrl: string,  
    ) {  }
}