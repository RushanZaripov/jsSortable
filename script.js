
SortableGrid = function(table)
{
    this.table = null;
    this.rows = null;
    this.source = null;
    this.target = null;
    this.sourceCell = null;
    this.targetCell = null;
};

SortableGrid.prototype = {
    init: function init(table){
        this.table = table;
        this.rows = this.table.rows;

        [].slice.call(this.rows[0].cells).forEach(function (item){
                item.draggable = true;
        });

        this.table.addEventListener('dragstart', (event) =>{
            this.source = event.target; 

            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('Text', this.source.textContent);
    
            // Подписываемся на события 
            this.table.addEventListener('dragover', (event) => {this.__onDragOver(event)}, false);
            this.table.addEventListener('dragend', (event) => {this.__onDragEnd(event)}, false);
    
        }, false);
    },
    __onDragOver: function __onDragOver(event){
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        this.target = event.target;
        let iSourceCell, iTargetCell;
        if( this.target && this.target !== this.source && this.target.nodeName == 'TH' ){
            this.sourceCell = this.source.cellIndex;
            this.targetCell = this.target.cellIndex;
            this.rows[0].insertBefore(this.source, this.target.nextSibling || this.target);
            //Перемещаем остальные ячейки
            for ( let i = 1; i <  this.rows.length; i++ )
            {
                iSourceCell = this.rows[i].cells[this.sourceCell];
                iTargetCell = this.rows[i].cells[this.targetCell];
                this.rows[i].insertBefore(iSourceCell, iTargetCell.nextSibling || iTargetCell);
            }
        }
    },
    __onDragEnd: function __onDragEnd(event){
        event.preventDefault();

        this.table.removeEventListener('dragover', (event) => {this.__onDragOver(event)}, false);
        this.table.removeEventListener('dragend', (event) => {this.__onDragEnd(event)}, false);

    },
    
}