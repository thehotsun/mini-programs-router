"use strict";
Page({
    data: {
        pageName: 'page B',
        backSetData: { calledFrom: 'pageB' },
    },
    onLoad: function (query) {
        this.setData({ query: JSON.stringify(query) });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRTtLQUNyQztJQUNELE1BQU0sRUFBTixVQUFPLEtBQVU7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFBO0lBQzlDLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcbiAgZGF0YToge1xuICAgIHBhZ2VOYW1lOiAncGFnZSBCJyxcbiAgICBiYWNrU2V0RGF0YTogeyBjYWxsZWRGcm9tOiAncGFnZUInIH0sXG4gIH0sXG4gIG9uTG9hZChxdWVyeTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtxdWVyeTogSlNPTi5zdHJpbmdpZnkocXVlcnkpfSlcbiAgfVxufSlcbiJdfQ==