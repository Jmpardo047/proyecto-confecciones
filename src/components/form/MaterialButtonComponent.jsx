
export const MaterialButtonComponent = ({name, onClick}) => {

  return (
    <>
        <div className='bt-material-component'>
            <p>{name}</p>
            <img onClick={onClick} className='x-formp' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARZJREFUSEvtlU0OgjAQhd9wErwJruACGHbKMVi57DHQnT8XkBXeRC4iNTU0IaR0yk/EBSxpeF/nzbyBsNBDC3Gxgn/m/Gr1/1idRMKXEkcinC+P7Gm7WRKJoJbIb0W24SpgexyHoiQgAFB5hLQP3kDLBlhxcB4ciQNJ5FrQBO9A4RG2nDssWAFjC3wMVGk6gfvg6n0toe11qlT33hlsggPwtZCLve2BGwQ2wL9aQ6GDrNa37faUm/a+WA2q2ADVutaomeDOYNP0vgGfi9qkim2RsUXNtr3Yil1yOgbOgneheOnY2Ka3DSfgdC2ydGrFvloStj2tAQoOif29yLaTfxKcwNhz1uqxwtx3K5hzaLbz1erZrOSEPscnmx9zxYCUAAAAAElFTkSuQmCC"/>
        </div>
    </>
  )
}
