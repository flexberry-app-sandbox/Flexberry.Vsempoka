﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Vsempoka
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Товары.
    /// </summary>
    // *** Start programmer edit section *** (Товары CustomAttributes)

    // *** End programmer edit section *** (Товары CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТоварыE", new string[] {
            "НаимТовара as \'Наим товара\'",
            "Произв as \'Произв\'",
            "ЕдИзм as \'Ед изм\'",
            "Цена as \'Цена\'",
            "Масса as \'Масса\'"})]
    [View("ТоварыL", new string[] {
            "НаимТовара as \'Наим товара\'",
            "Произв as \'Произв\'",
            "ЕдИзм as \'Ед изм\'",
            "Цена as \'Цена\'",
            "Масса as \'Масса\'"})]
    public class Товары : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаимТовара;
        
        private string fПроизв;
        
        private IIS.Vsempoka.ЕдИзм fЕдИзм;
        
        private double fЦена;
        
        private double fМасса;
        
        // *** Start programmer edit section *** (Товары CustomMembers)

        // *** End programmer edit section *** (Товары CustomMembers)

        
        /// <summary>
        /// ЕдИзм.
        /// </summary>
        // *** Start programmer edit section *** (Товары.ЕдИзм CustomAttributes)

        // *** End programmer edit section *** (Товары.ЕдИзм CustomAttributes)
        public virtual IIS.Vsempoka.ЕдИзм ЕдИзм
        {
            get
            {
                // *** Start programmer edit section *** (Товары.ЕдИзм Get start)

                // *** End programmer edit section *** (Товары.ЕдИзм Get start)
                IIS.Vsempoka.ЕдИзм result = this.fЕдИзм;
                // *** Start programmer edit section *** (Товары.ЕдИзм Get end)

                // *** End programmer edit section *** (Товары.ЕдИзм Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.ЕдИзм Set start)

                // *** End programmer edit section *** (Товары.ЕдИзм Set start)
                this.fЕдИзм = value;
                // *** Start programmer edit section *** (Товары.ЕдИзм Set end)

                // *** End programmer edit section *** (Товары.ЕдИзм Set end)
            }
        }
        
        /// <summary>
        /// Масса.
        /// </summary>
        // *** Start programmer edit section *** (Товары.Масса CustomAttributes)

        // *** End programmer edit section *** (Товары.Масса CustomAttributes)
        public virtual double Масса
        {
            get
            {
                // *** Start programmer edit section *** (Товары.Масса Get start)

                // *** End programmer edit section *** (Товары.Масса Get start)
                double result = this.fМасса;
                // *** Start programmer edit section *** (Товары.Масса Get end)

                // *** End programmer edit section *** (Товары.Масса Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.Масса Set start)

                // *** End programmer edit section *** (Товары.Масса Set start)
                this.fМасса = value;
                // *** Start programmer edit section *** (Товары.Масса Set end)

                // *** End programmer edit section *** (Товары.Масса Set end)
            }
        }
        
        /// <summary>
        /// НаимТовара.
        /// </summary>
        // *** Start programmer edit section *** (Товары.НаимТовара CustomAttributes)

        // *** End programmer edit section *** (Товары.НаимТовара CustomAttributes)
        [StrLen(255)]
        public virtual string НаимТовара
        {
            get
            {
                // *** Start programmer edit section *** (Товары.НаимТовара Get start)

                // *** End programmer edit section *** (Товары.НаимТовара Get start)
                string result = this.fНаимТовара;
                // *** Start programmer edit section *** (Товары.НаимТовара Get end)

                // *** End programmer edit section *** (Товары.НаимТовара Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.НаимТовара Set start)

                // *** End programmer edit section *** (Товары.НаимТовара Set start)
                this.fНаимТовара = value;
                // *** Start programmer edit section *** (Товары.НаимТовара Set end)

                // *** End programmer edit section *** (Товары.НаимТовара Set end)
            }
        }
        
        /// <summary>
        /// Произв.
        /// </summary>
        // *** Start programmer edit section *** (Товары.Произв CustomAttributes)

        // *** End programmer edit section *** (Товары.Произв CustomAttributes)
        [StrLen(255)]
        public virtual string Произв
        {
            get
            {
                // *** Start programmer edit section *** (Товары.Произв Get start)

                // *** End programmer edit section *** (Товары.Произв Get start)
                string result = this.fПроизв;
                // *** Start programmer edit section *** (Товары.Произв Get end)

                // *** End programmer edit section *** (Товары.Произв Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.Произв Set start)

                // *** End programmer edit section *** (Товары.Произв Set start)
                this.fПроизв = value;
                // *** Start programmer edit section *** (Товары.Произв Set end)

                // *** End programmer edit section *** (Товары.Произв Set end)
            }
        }
        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (Товары.Цена CustomAttributes)

        // *** End programmer edit section *** (Товары.Цена CustomAttributes)
        public virtual double Цена
        {
            get
            {
                // *** Start programmer edit section *** (Товары.Цена Get start)

                // *** End programmer edit section *** (Товары.Цена Get start)
                double result = this.fЦена;
                // *** Start programmer edit section *** (Товары.Цена Get end)

                // *** End programmer edit section *** (Товары.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.Цена Set start)

                // *** End programmer edit section *** (Товары.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (Товары.Цена Set end)

                // *** End programmer edit section *** (Товары.Цена Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТоварыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТоварыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТоварыE", typeof(IIS.Vsempoka.Товары));
                }
            }
            
            /// <summary>
            /// "ТоварыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТоварыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТоварыL", typeof(IIS.Vsempoka.Товары));
                }
            }
        }
    }
}
